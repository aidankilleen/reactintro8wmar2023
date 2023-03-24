import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addMember, deleteMember, getAllMembers, getMember, updateMember } from './Api';
import './App.css';



function App() {

  const { 
    data: member, 
    error:err, 
    isLoading:isLoadingMember, 
    isError:isErrorMember} = useQuery(["member", { id:4 }], getMember);




  const { data:members, error, isLoading, isError } 
    = useQuery("members", getAllMembers);

  const deleteMutation = useMutation((id) => {
    return deleteMember(id);
  });

  const addMutation = useMutation((memberToAdd) => {
    return addMember(memberToAdd);
  })

  const updateMutation = useMutation((memberToUpdate) => {
    return updateMember(memberToUpdate);
  })

  const queryClient = useQueryClient();

  if (isLoading) {
    return (
      <>
      <h2>Loading...</h2>

      <div><img src="loading-gif.gif"/></div>
      </>
    )
  }
  if (isError) {
    return (
      <h2>Error: { error.message }</h2>
    )
  }

  const onDelete = (id) => {

    if (window.confirm("are you sure?")) {
      deleteMutation.mutate(id, {
        onSuccess: (e) => {
          queryClient.invalidateQueries(["members"])
        }
      })
  
    }
  }
  const onAddMember = () => {
    alert("add member");

    const memberToAdd = {
      name: "New Member", 
      email: "new.member@gmail.com", 
      active: false
    };

    addMutation.mutate(memberToAdd, {
      onSuccess: (addedMember) => {
        alert(JSON.stringify(addedMember));
        queryClient.invalidateQueries(["members"]);
      }
    })
  }
  const onEdit = (memberToUpdate) => {
    memberToUpdate.name = "CHANGED";

    updateMutation.mutate(memberToUpdate, {

      onSuccess: (updatedMember) => {
        queryClient.invalidateQueries(["members"]);
      }
    })

  }
  return (
    <div>
      <h1>React Query Investigation</h1>
      <table>
        <thead></thead>
        <tbody>
        { 
          members.map(member => 
            <tr key= {member.id}>
              <td>{ member.id }</td>
              <td>{ member.name }</td>
              <td>{ member.email }</td>
              <td>{ member.active ? "Active" : "Inactive" }</td>
              <td>
                <button onClick = { () => onDelete(member.id)} >X</button>
                <button onClick = { () => onEdit(member)} >Edit</button>
              </td>
            </tr>) 
        }
        </tbody>
      </table>
      <button onClick={ onAddMember }>Add Member</button>


      found: { JSON.stringify(member)}
    </div>

  );
}

export default App;
