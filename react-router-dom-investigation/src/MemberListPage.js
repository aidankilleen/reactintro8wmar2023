import { NavLink } from "react-router-dom"
import { members } from "./members"

export default function MemberListPage() {
    return (
        <>
            <h2>Member List</h2>
            <table>
                <thead>

                </thead>
                <tbody>

                {
                    members.map(member => {
                        return (
                            <tr key={ member.id }>
                                <td>
                                    <NavLink to = { `${ member.id }` }>{ member.id }</NavLink>
                                </td>
                                <td>{ member.name }</td>
                                <td>{ member.email }</td>
                                <td>{ member.active ? "Active" : "Inactive" }</td>
                            </tr>
                        )
                    })
                }
                 </tbody>

            </table>
        </>
    )
}