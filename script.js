
const cursos = {
    "Fundamentos de la Matronería": [],
    "Salud Mental en el Curso de la Vida": [],
    "Biología Celular": [],
    "Morfología Básica": [],
    "Química General y Orgánica": [],
    "Antropología": [],
    "Anatomía Aplicada a la Gineco - Obstetricia": ["Morfología Básica"],
    "Educación, Salud y Medio Ambiente": [],
    "Integrado de Fisiología - Fisiopatología I": ["Biología Celular"],
    "Histoembriología": ["Biología Celular"],
    "Bioquímica General": ["Química General y Orgánica"],
    "Salud Digital": [],
    // Continúa agregando los demás cursos con sus requisitos...
};

const aprobados = new Set();

function renderCursos() {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    Object.keys(cursos).forEach(nombre => {
        const requisitos = cursos[nombre];
        const desbloqueado = requisitos.every(req => aprobados.has(req));

        const div = document.createElement('div');
        div.className = 'course' + (desbloqueado ? '' : ' locked');
        div.innerHTML = `<strong>${nombre}</strong><br>`;

        const btn = document.createElement('button');
        btn.textContent = 'Aprobar';
        btn.disabled = !desbloqueado || aprobados.has(nombre);
        btn.onclick = () => {
            aprobados.add(nombre);
            renderCursos();
        };

        div.appendChild(btn);
        container.appendChild(div);
    });
}

renderCursos();
