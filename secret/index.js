//initialization of showing secret message function

const { hash } = window.location;

const uncodeMessage = atob(hash.replace('#', ''));

if (uncodeMessage) {
    document.querySelector('.link-panel').classList.add('hide');
    document.querySelector('.create-message-panel').classList.add('hide');
    document.querySelector('.show-message-panel').classList.remove('hide');
    const link = document.querySelector('#show_message_input');
    link.value = uncodeMessage;
    console.log(link.value);
}

//initialization of the message coding function


document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('.create-message-panel').classList.add('hide');
    const createMessageInputValue = document.querySelector('.create-message-input').value;
    const codedMessage = window.btoa(createMessageInputValue);
    document.querySelector('.link-panel').classList.remove('hide');
    const link = document.querySelector('#link_area');
    link.value = `${window.location}#${codedMessage}`;
    link.select();

});

