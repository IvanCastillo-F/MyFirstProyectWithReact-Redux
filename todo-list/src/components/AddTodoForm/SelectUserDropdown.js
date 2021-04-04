export default function SelectUserDropdown(props){
    const {users, selectedUser, onUserSelected} = props;

    const opcions = users.map((user, index) => (
        <option key={index}>{user}</option>
    ));

    return (
        <div>
            <label>Select a User</label>
            <br/>
            <select value={selectedUser} onChange={onUserSelected}>
                <option></option>
                {opcions}
            </select>
        </div>
    )
}