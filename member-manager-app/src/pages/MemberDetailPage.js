import { useParams } from "react-router-dom"

export default function MemberDetailPage() {

    const {id} = useParams();

    // TODO - read the details 

    
    return (
        <>
            <h2>Member Detail Page</h2>

            { id }
        </>
    )
}