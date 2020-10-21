const form = document.getElementById('activityForm');

/**
 * Gets random activity by activity type.
 */
const getActivity = async e => {
  e.preventDefault();
  // TODO: Get activity type value from select field

  try {
    // TODO: Use Fetch API to make a GET request to https://www.boredapi.com/

    // TODO: Extract the activity data from the response

    // TODO: Inject activity data to HTML card element using template literal
    const output = `<div class="card border border-primary my-4 lead">
         <div class="card-header bg-dark text-white">
            <strong>⚽ Activity</strong>
            <button type="button" class="close" aria-label="Close" onclick="removeActivity()">
               <span class="text-white" aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="card-body">
            <ul class="list-group list-group-flush">
               <li class="list-group-item"><strong>Activity: </strong></li>
               <li class="list-group-item"><strong>Number of participants: </strong></li>
               <li class="list-group-item"><strong>Type: </strong></li>
            </ul>
         </div>
      </div>`;
    // TODO: Insert the activity card into output div
  } catch (err) {
    // TODO: handle error
  }
};

// TODO: Listen for form submit event

// TODO: Delete activity box
const removeActivity = () => {

};