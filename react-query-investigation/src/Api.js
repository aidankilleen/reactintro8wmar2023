
const url = "http://localhost:3010/members";

export async function getMember({ queryKey }) {

    const [, { id }] = queryKey;

    const response = await fetch(`${url}/${id}`);

    if (!response.ok) {
        throw new Error("Can't fetch member");
    }
    return response.json();
}

export async function getAllMembers() {

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error ("something went wrong");
    }
    return response.json()
  }

export async function deleteMember(id) {

    const response = await fetch(`${url}/${id}`, {
        method: "delete"
    });

    if (!response.ok) {
        throw new Error ("delete failed");
    }
    return response.json();
}

export async function addMember(memberToAdd) {

    const response = await fetch(url, {
        method: "post" , 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(memberToAdd)
    });

    if (!response.ok) {
        throw new Error("add failed");
    }
    return response.json();
}

export async function updateMember(memberToUpdate) {

    const response = await fetch(`${url}/${memberToUpdate.id}`, {

        method: "put", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(memberToUpdate)
    });

    if (!response.ok) {
        throw new Error("update failed");
    }

    return response.json();

}