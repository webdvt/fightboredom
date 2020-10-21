const form = document.getElementById('activityForm');

const getActivity = async e => {
  e.preventDefault();
  const outputDiv = document.querySelector('#output');
  // Get activity type value from select field
  const activityType = form['activity-type'].value;

  try {
    // Calling: https://www.boredapi.com/
    const response = await fetch(`https://www.boredapi.com/api/activity?type=${activityType}`);
    const data = await response.json();
    const { activity, participants, type} = data;
    // Show activity info
    const output = `<div class="card border border-primary my-4 lead">
         <div class="card-header bg-dark text-white">
            <strong>⚽ Activity</strong>
            <button type="button" class="close" aria-label="Close" onclick="removeActivity()">
               <span class="text-white" aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="card-body">
            <ul class="list-group list-group-flush">
               <li class="list-group-item"><strong>Activity: </strong>${activity}</li>
               <li class="list-group-item"><strong>Number of participants: </strong>${participants}</li>
               <li class="list-group-item"><strong>Type: </strong>${type}</li>
            </ul>
         </div>
      </div>`;
    // Insert into output div
    outputDiv.innerHTML = output || '';
  } catch (err) {
    outputDiv.innerHTML =
      `<div class="alert alert-danger">
          Error, please try again.
        </div>`;
    throw Error(err.statusText);
  }
};

// Listen for form submit
form.addEventListener('submit', getActivity);

// Delete activity box
const removeActivity = () => {
  document.querySelector('.card').remove();
};