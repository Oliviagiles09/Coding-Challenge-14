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
