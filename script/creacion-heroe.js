document.addEventListener('DOMContentLoaded', function() {
    // Botón para mostrar la sección de trajes
    const guardarHeroeBtn = document.getElementById('guardar-heroe');
    const trajesSection = document.getElementById('trajes-section');
    const addTrajeBtn = document.getElementById('add-traje');
    const trajesList = document.getElementById('trajes-list');
    const cancelarBtn = document.getElementById('cancelar');
    const nuevoHeroeBtn = document.getElementById('nuevo-heroe');
    
    // Mostrar sección de trajes al hacer clic en "Nuevo Heroe"
    nuevoHeroeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Limpiar el formulario
        document.getElementById('hero-form').reset();
        // Mostrar sección de trajes
        trajesSection.style.display = 'block';
        
        // Desplazarse hacia la sección de trajes
        trajesSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Función para agregar un nuevo campo de traje
    addTrajeBtn.addEventListener('click', function() {
        const newTrajeItem = document.createElement('div');
        newTrajeItem.className = 'traje-item';
        newTrajeItem.innerHTML = `
            <label class="traje-label">Nombre traje</label>
            <input type="text" class="traje-input">
            <button type="button" class="remove-traje-btn">-</button>
        `;
        trajesList.appendChild(newTrajeItem);
        
        // Añadir event listener para el botón de eliminar
        const removeBtn = newTrajeItem.querySelector('.remove-traje-btn');
        removeBtn.addEventListener('click', function() {
            trajesList.removeChild(newTrajeItem);
        });
    });
    
    // Agregar event listeners a los botones de eliminar existentes
    document.querySelectorAll('.remove-traje-btn').forEach(button => {
        button.addEventListener('click', function() {
            const trajeItem = this.closest('.traje-item');
            trajesList.removeChild(trajeItem);
        });
    });
    
    // Funcionalidad para Cancelar
    cancelarBtn.addEventListener('click', function() {
        // Limpiar el formulario
        document.getElementById('hero-form').reset();
        // Ocultar sección de trajes
        trajesSection.style.display = 'none';
    });
    
    // Funcionalidad para Guardar Heroe
    guardarHeroeBtn.addEventListener('click', function() {
        // Aquí podría ir el código para guardar la información del héroe
        alert('Héroe guardado correctamente');
        
        // Opcional: ocultar la sección de trajes después de guardar
        // trajesSection.style.display = 'none';
    });
});
