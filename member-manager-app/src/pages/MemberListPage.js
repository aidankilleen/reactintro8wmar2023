import { useMutation, useQuery } from "react-query"
import { addMember, deleteMember, getAllMembers, updateMember } from "../elements/Api";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Dialog } from "primereact/dialog";
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';

import { Link } from "react-router-dom";
import { queryClient } from "..";
import { useContext, useRef, useState } from "react";
import { ShowDialogContext } from "../App";
import MailToLink from "../elements/MailToLink";
import MemberDialog from "../elements/MemberDialog";



export function showMemberDialog() {

    alert("show member dialog");

}

export default function MemberListPage() {

    const toast = useRef(null);
    //const [showDialog, setShowDialog] = useState(false);

    const showDialog = useContext(ShowDialogContext);

    const [adding, setAdding] = useState(true);

    const [editingMember, setEditingMember] = useState({
        name: '',
        email: '',
        active: false
    });

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

    const formatActiveColumn = (member) => {
        return (
            <Tag
                value={member.active ? 'Active' : 'Inactive'}
                severity={member.active ? 'success' : 'danger'}
            />
        )
    }

    const formatEmailColumn = (member) => {

        // TODO - fix this - clicking on email causes refresh of page
        //return (
        //    <a href={`mailto:${member.email}`}>{member.email}</a>
            
        //)
        return (
            <MailToLink email= { member.email }/>
        )

    }

    const formatIdColumn = (member) => {

        return (
            <Link to={`/members/${member.id}`}>
                {member.id}
            </Link>
        )
    }

    const onEdit = (member) => {

        setEditingMember(current => {
            return {
                ...current,
                ...member
            }
        });
        setAdding(false);
        showDialog.setter(true);

    }
    const onDelete = (id) => {
        confirmDialog({
            message: `Are you sure you want to delete user ${id}?`,
            header: 'Are you sure?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {

                deleteMutation.mutate(id, {
                    onSuccess: (e) => {
                        queryClient.invalidateQueries(["members"]);

                        toast.current.show({
                            severity: 'info',
                            summary: 'Deleted',
                            detail: `User ${id} deleted`
                        });
                    }
                })
            },
            reject: () => { }
        })
    }
    const formatControlsColumn = (member) => {

        return (
            <>
                <Button
                    icon="pi pi-trash"
                    size="small"
                    severity="danger"
                    onClick={() => onDelete(member.id)}
                    tooltip="Delete"
                    tooltipOptions={{ position: 'top' }}
                />
                <Button
                    icon="pi pi-pencil"
                    size="small"
                    severity="info"
                    onClick={() => onEdit(member)}
                    tooltip="Edit"
                    tooltipOptions={{ position: 'top' }}
                />
            </>
        )
    }


    const onSave = (save, member) => {
        showDialog.setter(false);
        if (save) {
            if (adding) {
                //write editingMember to the api
                addMutation.mutate(member, {
                    onSuccess: (addedMember) => {
                        queryClient.invalidateQueries(["members"]);

                        toast.current.show({
                            severity: 'info',
                            summary: 'Added',
                            detail: `Member ${addedMember.id} added`
                        });
                    }
                })

            } else {
                // update editingMember record via api
                updateMutation.mutate(member, {
                    onSuccess: (updatedMember) => {
                        queryClient.invalidateQueries(["members"]);
                        toast.current.show({
                            severity: 'info',
                            summary: 'Saved',
                            detail: `Member ${updatedMember.id} saved`
                        });
                    }
                })
            }
        }
    }


    return (
        <>
            <h2>Member List Page</h2>

            <Button
                icon='pi pi-user-plus'
                tooltip="Add Member"
                onClick={() => {
                    setEditingMember({name:"", email:"", active:false})
                    setAdding(true)
                    showDialog.setter(true)
                }} />

            {/*<MemberTable members={members} onEdit={()=>{}} onDelete={()=>{}}/>*/}

            <DataTable value={members}>
                <Column field="id" header="Id" body={formatIdColumn}></Column>
                <Column field="name" header="Name"></Column>
                <Column field="email" header="Email" body={formatEmailColumn}></Column>
                <Column field="active" header="Active" body={formatActiveColumn}></Column>

                <Column header="Controls" body={formatControlsColumn}></Column>
            </DataTable>

            <ConfirmDialog />
            <Toast ref={toast} />

            <MemberDialog 
                visible={ showDialog.value }
                onSave={ onSave }
                mode={ adding }
                member={ editingMember }/>

        </>
    )
}