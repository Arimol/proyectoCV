
//Boton con evento de Voz

const voiceButton = document.getElementById('voiceButton');
const voiceMessage = document.getElementById('voiceMessage');

voiceButton.addEventListener('click', () => {
    if (voiceMessage.paused) {
        voiceMessage.play();
        voiceButton.textContent = 'Pausar Mensaje';
    } else {
        voiceMessage.pause();
        voiceButton.textContent = 'Escucha sobre mi y mis expetativas';
    }
});

const showSkillsButton = document.getElementById('showSkillsButton');
const skillsInfo = document.getElementById('skillsInfo');

//Habilidades blandas

showSkillsButton.addEventListener('click', () => {
    if (skillsInfo.style.display === 'none' || skillsInfo.style.display === '') {
        skillsInfo.style.display = 'block';
        showSkillsButton.textContent = 'Ocultar Habilidades Blandas';
    } else {
        skillsInfo.style.display = 'none';
        showSkillsButton.textContent = 'Mostrar Habilidades Blandas';
    }
});

//Eventos al pasar el mouse

const educationSection = document.querySelector('.cv-education');
const experienceSection = document.querySelector('.cv-experience');

// eventos para resaltar al pasar el mouse
educationSection.addEventListener('mouseover', () => {
    educationSection.style.backgroundColor = '#ffcccc'; // Cambia el color de fondo al pasar el mouse
});

educationSection.addEventListener('mouseout', () => {
    educationSection.style.backgroundColor = ''; // Restaura el color de fondo 
});

experienceSection.addEventListener('mouseover', () => {
    experienceSection.style.backgroundColor = '#ffcccc'; // Cambia el color de fondo al pasar el mouse
});

experienceSection.addEventListener('mouseout', () => {
    experienceSection.style.backgroundColor = ''; // Restaura el color de fondo 
});

//cambiar el nombre 

//Obtener el botón y el elemento de nombre
const changeNameButton = document.getElementById('changeNameButton');
const cvName = document.getElementById('cv-name');

// Evento click al botón para cambiar el nombre
changeNameButton.addEventListener('click', () => {
    // Preguntar nuevo nombre
    const nuevoNombre = prompt('Ingresa el nuevo nombre:');
    
    // actualizar nombre
    if (nuevoNombre) {
        cvName.textContent =nuevoNombre;
    }
});


//cambiar los datos en contacto

const changeContactButton = document.getElementById('changeContactButton');
const emailElement = document.getElementById('email');
const telefonoElement = document.getElementById('telefono');
const linkedinLink = document.getElementById('linkedinLink');

changeContactButton.addEventListener('click', () => {
    const nuevoEmail = prompt('Ingresa tu nuevo email:');
    const nuevoTelefono = prompt('Ingresa tu nuevo número de teléfono:');
    const nuevaLinkedin = prompt('Ingresa tu nueva dirección de LinkedIn:');

    if (nuevoEmail) {
        emailElement.textContent = nuevoEmail;
    }

    if (nuevoTelefono) {
        telefonoElement.textContent = nuevoTelefono;
    }

    if (nuevaLinkedin) {
        linkedinLink.href = nuevaLinkedin;
    }
});

//cambiar educacion

const addEducationButton = document.getElementById('addEducationButton');
const educationList = document.getElementById('educationList');
const editButtons = document.querySelectorAll('.editButton');

addEducationButton.addEventListener('click', () => {
    const nuevoTitulo = prompt('Ingresa el nuevo título de educación:');
    const nuevaUniversidad = prompt('Ingresa la nueva universidad:');
    const nuevoAnio = prompt('Ingresa el nuevo año de finalización:');

    if (nuevoTitulo && nuevaUniversidad && nuevoAnio) {
        const nuevaEducacion = document.createElement('li');
        nuevaEducacion.innerHTML = `<strong>${nuevoTitulo}</strong> - ${nuevaUniversidad} (${nuevoAnio}) <button class="editButton">Editar</button>`;
        educationList.appendChild(nuevaEducacion);
        bindEditButtonEvent(nuevaEducacion.querySelector('.editButton'));
    }
});

function bindEditButtonEvent(editButton) {
    editButton.addEventListener('click', () => {
        const listItem = editButton.parentElement;
        const nuevoTitulo = prompt('Ingresa el nuevo título de educación:');
        const nuevaUniversidad = prompt('Ingresa la nueva universidad:');
        const nuevoAnio = prompt('Ingresa el nuevo año de finalización:');

        if (nuevoTitulo && nuevaUniversidad && nuevoAnio) {
            listItem.innerHTML = `<strong>${nuevoTitulo}</strong> - ${nuevaUniversidad} (${nuevoAnio}) <button class="editButton">Editar</button>`;
            bindEditButtonEvent(listItem.querySelector('.editButton'));
        }
    });
}

// editar botones existentes
editButtons.forEach(editButton => {
    bindEditButtonEvent(editButton);
});


//experiencia laboral

const addExperienceButton = document.getElementById('addExperienceButton');
const experienceList = document.getElementById('experienceList');
const editButtonsExperience = document.querySelectorAll('.editButtonExperience');

addExperienceButton.addEventListener('click', () => {
    const nuevoTrabajo = prompt('Ingresa el nuevo trabajo:');
    const nuevaEmpresa = prompt('Ingresa la nueva empresa:');
    const nuevaFecha = prompt('Ingresa la nueva fecha de inicio y finalización:');

    if (nuevoTrabajo && nuevaEmpresa && nuevaFecha) {
        const nuevaExperiencia = document.createElement('li');
        nuevaExperiencia.innerHTML = `<strong>${nuevoTrabajo}</strong> - ${nuevaEmpresa} (${nuevaFecha}) <button class="editButtonExperience">Editar</button>`;
        experienceList.appendChild(nuevaExperiencia);
        bindEditButtonEventExperience(nuevaExperiencia.querySelector('.editButtonExperience'));
    }
});

function bindEditButtonEventExperience(editButtonExperience) {
    editButtonExperience.addEventListener('click', () => {
        const listItem = editButtonExperience.parentElement;
        const nuevoTrabajo = prompt('Ingresa el nuevo trabajo:');
        const nuevaEmpresa = prompt('Ingresa la nueva empresa:');
        const nuevaFecha = prompt('Ingresa la nueva fecha de inicio y finalización:');

        if (nuevoTrabajo && nuevaEmpresa && nuevaFecha) {
            listItem.innerHTML = `<strong>${nuevoTrabajo}</strong> - ${nuevaEmpresa} (${nuevaFecha}) <button class="editButtonExperience">Editar</button>`;
            bindEditButtonEventExperience(listItem.querySelector('.editButtonExperience'));
        }
    });
}

// eventos de editar para los botones existentes
editButtonsExperience.forEach(editButtonExperience => {
    bindEditButtonEventExperience(editButtonExperience);
});

// Cursos y talleres

const addCoursesButton = document.getElementById('addCoursesButton');
const coursesList = document.getElementById('coursesList');
const editButtonsCourses = document.querySelectorAll('.editButtonCourses');

addCoursesButton.addEventListener('click', () => {
    const nuevoCurso = prompt('Ingresa el nuevo curso o taller:');
    if (nuevoCurso) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.innerHTML = `${nuevoCurso} <button class="editButtonCourses">Editar</button>`;
        coursesList.appendChild(nuevoElemento);
        bindEditButtonEventCourses(nuevoElemento.querySelector('.editButtonCourses'));
    }
});

function bindEditButtonEventCourses(editButtonCourses) {
    editButtonCourses.addEventListener('click', () => {
        const listItem = editButtonCourses.parentElement;
        const nuevoCurso = prompt('Ingresa el nuevo curso o taller:');
        if (nuevoCurso) {
            listItem.innerHTML = `${nuevoCurso} <button class="editButtonCourses">Editar</button>`;
            bindEditButtonEventCourses(listItem.querySelector('.editButtonCourses'));
        }
    });
}

// eventos de editar para los botones existentes
editButtonsCourses.forEach(editButtonCourses => {
    bindEditButtonEventCourses(editButtonCourses);
});

//cambiar perfil profesional
const changeProfileButton = document.getElementById('changeProfileButton');
const profileText = document.getElementById('profileText');

changeProfileButton.addEventListener('click', () => {
    const nuevoTexto = prompt('Ingresa el nuevo texto para tu perfil profesional:');
    
    if (nuevoTexto) {
        profileText.textContent = nuevoTexto;
    }
});

//cambiar foto

const changePhotoButton = document.getElementById('changePhotoButton');
const profilePhoto = document.getElementById('profilePhoto');

changePhotoButton.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            profilePhoto.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});