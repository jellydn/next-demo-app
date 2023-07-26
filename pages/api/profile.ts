import { type NextApiRequest, type NextApiResponse } from "next";
import { withValidation } from "next-validations";
import * as yup from "yup";

import { getGithubUserRepositories } from "../../services/github";

const schema = yup.object().shape({
  username: yup.string().min(3).required(),
});

const validate = withValidation({
  schema,
  type: "Yup",
  mode: "query",
});

/**
 * @swagger
 * /api/profile:
 *   get:
 *     description: Returns 10 projects base on github username
 *     parameters:
 *       - name: username
 *         description: Github username
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return 10 projects from github username
 *       400:
 *         description: Username is required and min 3 characters
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const responses = await getGithubUserRepositories(
      String(req.query.username)
    );
    res.status(200).json(responses);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default validate(handler);
