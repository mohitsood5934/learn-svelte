<!-- Also do this challenge by using store -->

<script>
  let name;
  let mobile;
  let description;
  let editIndex = -1;

  let users = [];

  function onSubmitButtonHandler() {
    const modifiedUsers = [...users];
    const userObj = {
      name,
      mobile,
      description,
    };
    if (editIndex > -1) {
      editIndex = -1;
      modifiedUsers[editIndex] = userObj;
    } else {
      modifiedUsers.push(userObj);
    }
    users = modifiedUsers;
    name = "";
    mobile = "";
    description = "";
  }

  function deleteSelectedRecord(index) {
    let modifiedUsers = [...users];
    modifiedUsers = modifiedUsers.slice(index + 1, 1);
    users = modifiedUsers;
  }

  function editSelectedRecord(index) {
    const userObj = users[index];
    name = userObj.name;
    mobile = userObj.mobile;
    description = userObj.description;
    editIndex = -1;
  }
</script>

<div class="contactform">
  <div class="contactform__heading">Contact List</div>
  <div class="contactform__data">
    <div class="contactform__name">
      <label for="name">Name</label>
      <input type="text" name="name" bind:value={name} />
    </div>
    <div class="contactform__mobile">
      <label for="mobile">Mobile Number</label>
      <input type="number" name="mobile" bind:value={mobile} />
    </div>
    <div class="contactform__description">
      <label for="description">Description</label>
      <textarea name="description" rows="5" cols="5" bind:value={description} />
    </div>
  </div>
  <div class="contactform__btn">
    <button on:click={onSubmitButtonHandler}>Submit</button>
  </div>
</div>
<ul class="userslist">
  {#each users as user, userIndex (user)}
    <li class="userlist__user">
      <span class="userlist__userinfo">
        <span>Name: {user.name}</span>
        <span>Mobile: {user.mobile}</span>
        <span>Description: {user.description}</span>
      </span>
      <span>
        <button on:click={() => editSelectedRecord(userIndex)}>Edit User</button
        >
        <button on:click={() => deleteSelectedRecord(userIndex)}
          >Delete User</button
        >
      </span>
    </li>
  {/each}
</ul>

<style>
  .contactform {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .contactform .contactform__heading {
    font-size: 2rem;
    color: black;
  }
  .contactform .contactform__data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .contactform .contactform__data .contactform__name {
    display: flex;
    flex-direction: column;
  }
  .contactform .contactform__data .contactform__mobile {
    display: flex;
    flex-direction: column;
  }
  .contactform .contactform__data .contactform__description {
    display: flex;
    flex-direction: column;
  }
  .contactform .contactform__btn {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
  }
  .contactform .contactform__btn button {
    width: 10rem;
    outline: none;
    background-color: black;
    color: white;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1rem;
  }
  ul li {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    padding: 10px;
  }
  .userlist__userinfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
