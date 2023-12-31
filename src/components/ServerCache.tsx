import { getClient } from "@/lib/client";
import { CompanyInfo } from "./CompanyInfo";
import { companyQuery as query } from "@/lib/queries";
export default async function ServerCache() {
    const { data, loading, error } = await getClient().query({ query });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return <CompanyInfo data={data} />;
}