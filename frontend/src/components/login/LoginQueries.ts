export const fetchIsMailValid = async (email: string): Promise<boolean> => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/v0/authenticate/email`,
    {
      method: "POST",
      body: new URLSearchParams({
        email,
      }),
    }
  );
  return res.json();
};

export const login = async (email: string, password: string): Promise<any> => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/v0/authenticate`,
    {
      method: "POST",
      body: new URLSearchParams({
        email,
        password,
      }),
    }
  );
  return res.json();
};
