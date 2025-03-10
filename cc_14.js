// Task 2 
function createSupportTicket(customerName, issueDescrption, priorityLevel) {
  const ticket = document.createElement('div');
  ticket.classList.add('ticket');
  ticket.setAttribute('id', 'ticket-' + Date.now());

cosnt ticketName = document.createElement('h2');
  ticketName.textContent = customerName;

const ticketDescription = document.createElement('p');
  ticketDescription.textContent = issueDescription;

const ticketPriority = document.createElement('p');
  ticketPriority.textContent = 'Priority: ${prioritylevel}';
  ticketpriority.classList.add(priorityLevel);

const resolveButton = document.createElement('button');
  resolveButton.textContent = 'Resolve';

resolveButton.addEventListener('click'.() => {
  ticket.remove();
});

ticket.appendChild(ticketName);
    ticket.appendChild(ticketDescription);
    ticket.appendChild(ticketPriority);
    ticket.appendChild(resolveButton);

    // Append ticket to the container
    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticket);
}
// Task 3 
function highlightHighPriorityTickets() {
  const highPriorityTickets = document.querySelectorAll('.ticket.High');
  cosnt ticketsArray = Array.from(highPriorityTickets);

ticketsArray.forEach(ticket => {
  ticket.style.backgroundColor = 'rbg(157, 174, 191);
    ticket.style.border = '2px solid blue';
});
}
// task 3 
function setupEventListeners () {
  const ticketContainer = document.getElementById('ticketContainer');

ticketContainer.addEventListeners('click', (event) => {
  if(event.target.tagName === 'BUTTON' && event.ticket.textContent === 'Resolve') {
    const ticket = event.target.closest('.ticket');
    ticket.remove():
  }

  consol.log('A ticket was clicked!');
  event.stopPropagation();
});
}

document.addEventListener('DOMContenetLoaded', setupEventListeners);
// Task 5 
function enableInlineEditing() {
  const ticketContainer = document.getElementById('ticketContainer');

ticketcontainer.addEventListener('dblclick', (event) => {
  const ticket = event.target.closest('.ticket');
  if (!ticket) return;

cosnt nameElement = ticket.querySelector('h2')
const descriptionElement = ticket.querySelector('p');
const priorityElement = ticket.querySelector('p');

const nameInput = document.createElement('input');
nameInput.value = nameElement.textContent;

const descriptionInput = document.createElement('textarea');
descriptionInput.value = descriptionElement.textContent;

 const priorityInput = document.createElement('input');
        priorityInput.value = priorityElement.textContent.replace('Priority: ', '');

        ticket.replaceChild(nameInput, nameElement);
        ticket.replaceChild(descriptionInput, descriptionElement);
        ticket.replaceChild(priorityInput, priorityElement);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        ticket.appendChild(saveButton);

        saveButton.addEventListener('click', () => {
            nameElement.textContent = nameInput.value;
            descriptionElement.textContent = descriptionInput.value;
            priorityElement.textContent = `Priority: ${priorityInput.value}`;

            ticket.replaceChild(nameElement, nameInput);
            ticket.replaceChild(descriptionElement, descriptionInput);
            ticket.replaceChild(priorityElement, priorityInput);
            saveButton.remove();
        });
    });
}
document.addEventListener('DOMContentLoaded', enableInlineEditing);
