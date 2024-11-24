import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email:', type: 'text', placeholder: 'your-email' },
                password: { label: 'Password:', type: 'password', placeholder: 'your-password' },
            },
            async authorize(credentials) {
                const adminEmail = process.env.ADMIN_EMAIL;
                const adminPassword = process.env.ADMIN_PASSWORD;

                // Check if environment variables are loaded
                console.log("Loaded Admin Email:", adminEmail);
                console.log("Loaded Admin Password (hashed/plain):", adminPassword);

                if (!adminEmail || !adminPassword) {
                    throw new Error('Admin credentials are not properly configured.');
                }

                // Check if the email matches
                if (credentials.email !== adminEmail) {
                    console.log("Incorrect email provided.");
                    throw new Error('No user exists with this email.');
                }

                // Compare passwords (hashed or plain text)
                let isPasswordCorrect = false;
                try {
                    console.log("Entered Password:", credentials.password);

                    // If adminPassword is hashed, compare with bcrypt
                    isPasswordCorrect = await bcrypt.compare(credentials.password, adminPassword);

                    // If bcrypt fails and passwords are plain text, fallback to direct comparison
                    if (!isPasswordCorrect) {
                        console.log("Bcrypt comparison failed. Trying plain text comparison...");
                        isPasswordCorrect = credentials.password === adminPassword;
                    }

                    console.log("Password Match Status:", isPasswordCorrect);
                } catch (error) {
                    console.error("Error during password comparison:", error);
                    throw new Error('Password comparison failed.');
                }

                if (!isPasswordCorrect) {
                    console.log("Incorrect password provided.");
                    throw new Error('Incorrect password.');
                }

                // Return admin user object on success
                return {
                    _id: '223002',
                    username: 'Admin',
                    role: 'admin',
                };
            },
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 10 * 24 * 60 * 60, // 10 days
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id;
                token.role = user.role;
                token.name = user.username;
            }
            console.log("Generated JWT Token:", JSON.stringify(token, null, 2));
            return token;
        },
        async session({ session, token }) {
            if (session) {
                session.user._id = token._id;
                session.user.role = token.role;
                session.user.name = token.name;
            }
            console.log("Session Data:", JSON.stringify(session, null, 2));
            return session;
        },
    },
};
