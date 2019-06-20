/* eslint-disable max-len */
/* eslint-disable no-undef */
const statusError = () => res.status(400).json({ status: 400, error: result.error.details[0].message });

export default statusError;
