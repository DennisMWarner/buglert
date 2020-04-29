import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BugsService {
  async findAll(query = {}) {
    let values = await dbContext.Bugs.find(query);
    // .populate(
    //   "creator",
    //   "name picture"
    // );
    return values;
  }
  async findById(id) {
    let value = await dbContext.Bugs.findById(id);

    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async create(bug) {
    console.log("Bug: ", bug);
    await dbContext.Bugs.create(bug);
    return "new bug created successfully.";
  }
}

export const bugsService = new BugsService();
