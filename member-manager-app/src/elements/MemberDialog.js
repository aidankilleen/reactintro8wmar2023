import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";

export default function MemberDialog(
    {visible, onSave, mode, member:memberProp}) {

    const [member, setMember] = useState({});

    useEffect(()=>{

        setMember(current => {
            return {
            ...memberProp
            }
        })
    }, [memberProp]);

    // mode means adding=true editing=false

    const dialogFooter = (
        <div>
            <Button
                label="save"
                icon="pi pi-check"
                onClick={() => onSave(true, member)}
            />
            <Button
                label="cancel"
                icon="pi pi-times"
                onClick={() => onSave(false)} />
        </div>
    );

    return (
        <>
        <Dialog
            visible={visible}
            onHide={onSave}
            footer={dialogFooter}
            style={{ width: '50vw' }}
            >Member dialog

            { mode ? <h3>Add Member</h3> : <h3>Edit Member</h3> }

            <span className="p-float-label">
                    <InputText
                        id="newName"
                        value={ member.name }
                        onChange={ (evt) => setMember(current => {
                            return {
                                ...current, 
                                name: evt.target.value
                            }
                        })}
                        style={{ width: '100%' }}
                    />
                    <label htmlFor="newName">Name</label>
                </span>
                <br />
                <span className="p-float-label">
                    <InputText
                        id="newEmail"
                        value={member.email}
                        style={{ width: '100%' }}
                        onChange={
                            (e) => setMember(
                                current => {
                                    return {
                                        ...current,
                                        email: e.target.value
                                    }
                                }
                            )
                        }
                    />
                    <label htmlFor="newEmail">Email</label>
                </span>
                Active:
                <Checkbox
                    checked={member.active}
                    onChange={
                        (evt) => setMember(
                            current => {
                                return {
                                    ...current,
                                    active: evt.target.checked
                                }
                            }
                        )
                    }
                />

        </Dialog>
        
        </>
    )
}