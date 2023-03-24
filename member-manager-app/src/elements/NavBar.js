import { Menubar } from 'primereact/menubar';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShowDialogContext } from '../App';
import { showMemberDialog } from '../pages/MemberListPage';

export default function NavBar() {

    const navigate = useNavigate();
    const location = useLocation();


    const showDialog = useContext(ShowDialogContext);

    const items = [
        {
            label: 'Home', 
            icon: 'pi pi-home',
            command: () => navigate('/home')
        }, 
        {
            label: 'About', 
            icon: 'pi pi-question-circle',
            command: () => navigate('/about')
        }, 
        {
            label: 'Contact', 
            icon: 'pi pi-phone',
            command: () => navigate('/contact')
        }, 
        {
            label: 'Members', 
            icon: 'pi pi-users',
            
            items: [
                {
                    label: 'Show Member List', 
                    icon: 'pi pi-list', 
                    command: () => navigate('/members'),
                },
                {
                    label: 'New Member', 
                    icon: 'pi pi-user-plus', 
                    command: () => {
                        // only show dialog on members page
                        if (location.pathname === "/members") {
                            showDialog.setter(true)

                        }
                    }, 
                    disabled: (location.pathname !== "/members")
                }
            ]
        }, 
        {
            label: 'Member Management', 
            command: () => navigate('/membermanagement')
        }

    ]
    return (

        <Menubar model={ items }/>

    )
}