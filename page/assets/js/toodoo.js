document.addEventListener('DOMContentLoaded', function(){
    const taskForm = document.querySelector('.task-form');
    const taskNameInput = document.getElementById('taskName');
    const monthInput = document.querySelector('input[name="mm"]');
    const dayInput = document.querySelector('input[name="dd"]');
    const yearInput = document.querySelector('input[name="yyyy"]');
    const statusSelect = document.getElementById('status');

    function setupDateInputs(){
        const dateInputs = [monthInput, dayInput, yearInput];
        dateInputs.forEach(function(input){
            input.addEventListener('input', function(){
                this.value = this.value.replace(/[^0-9]/g,'');

                if(this.value.length === this.maxLength){
                    const nextInput = this.nextElementSibling;
                    if (nextInput && nextInput.classList.contains('form-input')){
                        nextInput.focus();
                    }
                }
            });
        });
    }
    
    // function validateForm(){
    //     if (taskNameInput.value.trim() === ''){
    //         alert('Please enter a task name');
    //         taskNameInput.focus();
    //         return false;
    //     }

    //     const month = parseInt(monthInput.value);
    //     if (isNaN(month) || month<1 || month>12){
    //         alert('Please enter a valid month (1-12)');
    //         monthInput.focus();
    //         return false;
    //     }

    //     const day = parseInt(dayInput.value);
    //     if (isNaN(day) || month<1 || month>31){
    //         alert('Please enter a valid month (1-12)');
    //         dayInput.focus();
    //         return false;
    //     }

    //     const year = parseInt(yearInput.value);
    //     if (isNaN(month) || month<1000 || month>9999){
    //         alert('Please enter a valid month (1-12)');
    //         yearInput.focus();
    //         return false;
    //     }

    //     if (statusSelect.value === ''){
    //         alert('Please select a status');
    //         statusSelect.focus();
    //         return false;
    //     }

    //     return true;
    // }

    function setupDeleteButtons(){
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(function(button){
            button.addEventListener('click', function(event){
                if (!confirm('Are you sure you want to delete?')){
                    event.preventDefault();
                }
            });
        });
    }

    setupDateInputs();
    setupDeleteButtons();

    taskForm.addEventListener('submit', function(event){
        if (!validateForm()){
            event.preventDefault();
        }
    });
    taskNameInput.focus();
})