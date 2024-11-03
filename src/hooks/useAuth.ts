import { useState } from "react";

interface LoginCredentials {
  email: string;
  password: string;
}

// interface AuthResponse {
//   token: string;
//   user: {
//     id: string;
//     email: string;
//   };
// }

interface UseAuthReturn {
  login: (credentials: LoginCredentials) => Promise<void>;
  error: string | null;
  loading: boolean;
}

export const useAuth = (): UseAuthReturn => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials: LoginCredentials) => {
    setError(null);
    setLoading(true);

    try {
      //   const response = await fetch("https://api.example.com/auth/login", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(credentials),
      //   });

      //   const data: AuthResponse = await response.json();

      //   if (!response.ok) {
      //     throw new Error(data.message || "ログインに失敗しました。");
      //   }

      //   // トークンの保存
      //   localStorage.setItem("authToken", data.token);

      //   // ユーザー情報の保存
      //   localStorage.setItem("user", JSON.stringify(data.user));

      //   // ログイン成功時のリダイレクト
      //   window.location.href = "/dashboard";
      console.info("credentials", credentials);
    } catch (err) {
      setError(err instanceof Error ? err.message : "ログインに失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    error,
    loading,
  };
};
