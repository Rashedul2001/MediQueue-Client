'use client'
import { infoToast, successToast } from "@/helpers/AllToast";
import { authClient, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation";
export const useAuthActions = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const registerUser = async (data) => {
        // todo: double check the data 
        if (session) {
            infoToast("Already have an account", "Please log out first to create a new account.");
            return;
        }

        return await authClient.signUp.email({
            name: data.name, // required
            email: data.email, // required
            password: data.password, // required
            image: data.photo,
        })
    };

    const loginUser = async (data, rememberMe) => {
        // todo: double check the data
        if (session) {
            infoToast("Already logged in", "Please log out first.");
            return;
        }

        return await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe,
        });
    };

    const logoutAndRedirect = async (path = '/') => {
        if (!session) {
            infoToast("Already logged out", "No active session was found.");
            return;
        }

        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    successToast("Successfully logged out", "See you soon!")
                    router.push(path);

                },
            },
        });
    }
    const socialSignIn = async (provider) => {
        if (session) {
            infoToast("Already logged in", "Please log out first.");
            return;
        }
        return await authClient.signIn.social({
            provider: provider,
        });
    };

    return {
        registerUser,
        loginUser,
        logoutAndRedirect,
        socialSignIn,

    }
}