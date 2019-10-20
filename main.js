const getActivity = e => {
  e.preventDefault();
  // Get activity type value from select field

  // Make a GET request to: https://www.boredapi.com

  // Get activity info

  // Create html output using activity info
  const output = `<div class="card border border-primary my-4 lead">
       <div class="card-header bg-dark text-white">
          <strong>⚽ Activity</strong>
          <button type="button" class="close" aria-label="Close">
             <span class="text-white" aria-hidden="true">&times;</span>
          </button>
       </div>
       <div class="card-body">
          <ul class="list-group list-group-flush">
             <li class="list-group-item"><strong>Activity: </strong>[ACTIVITY]</li>
             <li class="list-group-item"><strong>Number of participants: </strong>[NUMBER_OF_PARTICIPANTS]</li>
             <li class="list-group-item"><strong>Type: </strong>[ACTIVITY_TYPE]</li>
          </ul>
       </div>
    </div>`;

  // Insert into output-div

};

// Listen for form submit

// Delete activity box
const removeActivity = () => {
  // ...
};