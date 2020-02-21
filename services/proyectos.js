const db = require("../config/db.config");

class ProyectosService {
  constructor() {
    this.Proyecto = db.proyecto;
    this.Pago = db.pago;
    this.Gasto = db.gasto;
  }

  async getProjects() {
    const projects = await this.Proyecto.findAll();
    return projects || [];
  }

  async getProject({ projectId }) {
    const proyecto = await this.Proyecto.findOne({
      where: { id: projectId },
      include: [
        {
          model: this.Pago
        },
        {
          model: this.Gasto
        }
      ]
    });

    return proyecto || {};
  }

  async createProject({ project }) {
    console.log(project);
    const createdProjectId = await this.Proyecto.create({ ...project });
    return createdProjectId;
  }

  async updateProject({ projectId, nombre }) {
    const updatedProjectId = await this.Proyecto.upsert({
      id: projectId,
      nombre
    });
    return updatedProjectId;
  }
}

module.exports = ProyectosService;
