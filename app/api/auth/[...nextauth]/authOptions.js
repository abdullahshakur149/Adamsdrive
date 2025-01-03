import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'email:',
                    type: 'text',
                    placeholder: 'your-email',
                },
                password: {
                    label: 'password:',
                    type: 'password',
                    placeholder: 'your-password',
                },
            },
            async authorize(credentials) {
                await connectDB();
                try {
                    const user = await User.findOne({
                        email: credentials.email,
                    });

                    if (!user) {
                        throw new Error('No User Exists');
                    }
                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );
                    if (isPasswordCorrect) {
                        console.log('Pass correct data:', user);
                        console.log(user)

                        return user;
                    } else {
                        throw new Error('Incorrect Password');
                    }
                } catch (error) {
                    console.log(error);
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/login',
        signOut: '/logout',
    },
    session: {
        strategy: 'jwt',
        //15 days
        maxAge: 24 * 60 * 60,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id?.toString();
                token.role = user.role;
                token.name = user.username
            }
            // console.log("This is the token", JSON.stringify(token, null, 2));
            return token;
        },
        async session({ session, token }) {
            if (session) {
                session.user._id = token._id;
                session.user.role = token.role;
                session.user.name = token.name
            }
            console.log("Session Data:", session);

            return session;
        },
    },
};