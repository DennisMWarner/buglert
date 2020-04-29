import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NotesService {
  async findAll(query = {}) {
    let values = await dbContext.Notes.find(query);
    return values;
  }
  async findByBugId(id) {
    let value = await dbContext.Notes.find({ bug: id });
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async create(note) {
    await dbContext.Notes.create(note);
    return "new bug created successfully.";
  }
  async deleteById(id) {
    await dbContext.Notes.deleteOne(id);
  }
}

export const notesService = new NotesService();
