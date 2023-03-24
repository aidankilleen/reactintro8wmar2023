import { useMutation, useQuery } from "react-query"
import { addMember, deleteMember, getAllMembers, updateMember } from "../elements/Api";

import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { queryClient } from "..";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";
import { useRef } from "react";


export default function MemberManagementPage () {

    const toast = useRef(null);

    const { data: members, error, isLoading, isError }
        = useQuery("members", getAllMembers);

    const deleteMutation = useMutation((id) => {
        return deleteMember(id);
    });

    const addMutation = useMutation((memberToAdd) => {
        return addMember(memberToAdd);
    });

    const updateMutation = useMutation((memberToUpdate) => {
        return updateMember(memberToUpdate);
    })

    if (isLoading) {
        return (
            <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration="2s" />
        )
    }
    if (isError) {
        return (
            <div>{error.message}</div>
        )
    }
    const onRowEditComplete = ({data, index, newData}) => {
        updateMutation.mutate(newData, {
            onSuccess: () => {
                queryClient.invalidateQueries(["members"]);
                toast.current.show({
                    severity: 'info',
                    summary: 'Saved',
                    detail: `User ${newData.id} modified`
                });
            }
        })
    }
    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(evt)=> options.editorCallback(evt.target.value)}/>
    }
    const checkboxEditor = (options) => {
        return <Checkbox checked={options.value} onChange={(evt)=>options.editorCallback(evt.target.checked)}/>
    }
    return (
        <>
            <DataTable value={members} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete}>
                <Column field="id" header="Id"></Column>
                <Column field="name" header="Name" editor={(options)=>textEditor(options)}></Column>
                <Column field="email" header="Email" editor={(options)=>textEditor(options)}></Column>
                <Column field="active" header="Active" editor={(options)=>checkboxEditor(options)}></Column>
                <Column rowEditor></Column>
            </DataTable>

            <Toast ref= {toast}/>

        </>
    )
}