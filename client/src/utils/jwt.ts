import { jwtDecode, JwtPayload } from "jwt-decode";
import { AccountType } from "./type";
import { accountLoginVar } from "../graphql/client/cache";


const JWTManager = () => {
    let inMemoryToken: string | null = null;
    let refreshTokenTimeoutId: number | null = null;
    let account: AccountType | null = null;


    const getToken = () => inMemoryToken;

    const getAccount = () => account;

    const setToken = (accessToken: string) => {
        inMemoryToken = accessToken;
        const decode = jwtDecode<JwtPayload & AccountType>(accessToken)
        account = {
            AccountID: decode.AccountID,
            Username: decode.Username,
            Role: decode.Role,
            Position: decode.Position
        };
        accountLoginVar(account)

        setRefreshTokenTimeout(Number(decode.exp) - Number(decode.iat));
    };

    const getRefreshToken = async () => {
        try {
            const response = await fetch("http://localhost:5000/refresh_token", {
                credentials: "include",
            });
            const data = (await response.json()) as {
                access_token: string;
            };

            setToken(data.access_token);
            return true;
        } catch (error) {
            console.log("Error: ", error);
            return false;
        }
    };

    const setRefreshTokenTimeout = (delay: number) => {
        refreshTokenTimeoutId = window.setTimeout(
            getRefreshToken,
            delay * 1000 - 5000
        );
        return true;
    };

    const deleteToken = () => {
        inMemoryToken = null;
        if (refreshTokenTimeoutId) {
            window.clearTimeout(refreshTokenTimeoutId);
        }
    };

    return {
        getAccount,
        getToken,
        setToken,
        getRefreshToken,
        deleteToken,
        refreshTokenTimeoutId
    };
};

export default JWTManager();