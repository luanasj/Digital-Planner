/**
 * @description Create Goal or Task
 * @route POST /goalsAndTasks
 */
 export const createGoalOrTask = tryCatchWrapper(async (req, res, next) => {
  
    if (!req.body)
      return next(createCustomError("Missing Information", 400));
  
    let sql = "goalsAndTasksInsert(?,?,?,?)";
    await pool.query(sql, [req.body.dsc,req.body.typenum,req.body.acc,req.body.dt]);
  
    return res.status(201).json({ message: `${req.body.typenum == 1 ? "Goal" : "Task"} has been created` });
  });

/**
 * @description Create Contact
 * @route POST /contacts
 */
 export const createContact = tryCatchWrapper(async (req, res, next) => {
  
    if (!req.body)
      return next(createCustomError("Missing Information", 400));
  
    let sql = "insertContacts(?,?,?,?,?,?,?)";
    await pool.query(sql, [req.body.nomectt,req.body.vinculo,req.body.disciplina,req.body.email,req.body.telefone,req.body.sitectt,req.body.instituicao]);
  
    return res.status(201).json({ message: `A contact has been created` })
  });

  /**
 * @description Get Week Goals and Tasks
 * @route GET /goalsandtasks
 */
export const getWeekGoalsAndTasks = tryCatchWrapper(async function (req, res, next) {
    let sql = "goalsAnsTasksSelect(?,?)";

    if (!req.body)
      return next(createCustomError("Missing Information", 400));

    const [rows] = await pool.query(sql,[req.body.date1,req.body.date2]);
    if (!rows.length) return res.status(204).json({ message: "empty list" });
  
    return res.status(200).json({ goalsandtasks: rows });
  });

   /**
 * @description Get Schedule
 * @route GET /schedule
 */
export const getSchedule = tryCatchWrapper(async function (req, res, next) {
    let sql = "select * from schedule";
    const [rows] = await pool.query(sql);
    if (!rows.length) return res.status(204).json({ message: "empty list" });
  
    return res.status(200).json({ schedule: rows });
  });

/**
 * @description Get Contacts
 * @route GET /contacts
 */
 export const getContacts = tryCatchWrapper(async function (req, res, next) {
    let sql = "select * from contacts";
    const [rows] = await pool.query(sql);
    if (!rows.length) return res.status(204).json({ message: "empty list" });
  
    return res.status(200).json({ contacts: rows });
  });

  /**
 * @description Update note
 * @route PATCH /contacts/:id
 */
export const updateContacts = tryCatchWrapper(async function (req, res, next) {
    const { id } = req.params;
    const { nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao} = req.body;
  
    if (!id || !req.body)
      return next(createCustomError("Missing information", 400));
    
    let sql = "contactsUpdate(?,?,?,?,?,?,?,?)";
    await pool.query(sql, [id,nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao]);
  
    return res.status(201).json({ message: "The contact has been updated" });
  });

  /**
 * @description Update goals and tasks
 * @route PATCH /goalsandtasks/:id
 */
export const updateGoalsAndTasks = tryCatchWrapper(async function (req, res, next) {
    const { id } = req.params;
    const { campo, entrada } = req.body;
  
    if (!id || !req.body)
      return next(createCustomError("Missing information", 400));
    
    let sql = "goalsAndTasksUpdate(?,?,?)";
    await pool.query(sql, [campo, entrada, id]);
  
    return res.status(201).json({ message: "The update was successful" });
  });

 /**
 * @description Update Schedule
 * @route PATCH /schedule/
 */
  export const updateSchedule = tryCatchWrapper(async function (req, res, next) {
    const { newActivity,dayweek,scperiod } = req.body;
  
    if (!req.body)
      return next(createCustomError("Missing information", 400));
    
    let sql = "scheduleUpdate(?,?,?)";
    await pool.query(sql, [newActivity,dayweek,scperiod]);
  
    return res.status(201).json({ message: "The update was successful" });
  });

  /**
 * @description Delete Goal or Task
 * @route DELETE /goalsandtasks/:id
 */
export const deleteGoalsAndTasks = tryCatchWrapper(async function (req, res, next) {
    const { id } = req.params;
  
    if (!id) return next(createCustomError("Id is required", 400));
  
    let sql = "goalsAndTasksDelete(?)";
    await pool.query(sql, [id]);
  
    return res.status(200).json({ message: "The item was deleted" });
  });

  /**
 * @description Delete Contact
 * @route DELETE /contact/:id
 */
export const deleteContact = tryCatchWrapper(async function (req, res, next) {
    const { id } = req.params;
  
    if (!id) return next(createCustomError("Id is required", 400));
  
    let sql = "contactsDelete(?)";
    await pool.query(sql, [id]);
  
    return res.status(200).json({ message: "The contact was deleted" });
  });





  




