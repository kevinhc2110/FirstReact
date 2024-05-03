export async function UseFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorMessage = `Error fetching data: ${response.status}`;
      throw new Error(errorMessage);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return (await response.json()) as T;
    } else {
      return (await response.text()) as unknown as T;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
