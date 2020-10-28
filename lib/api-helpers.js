// take only needed user fields to avoid sensitive ones (such as password)
export function extractUser(req) {
  if (!req.user) return null;
  const {
    _id, name, email, bio, profilePicture, emailVerified,
    last_name, gender, mobile, nic, address
  } = req.user;
  return {
    _id, name, email, bio, profilePicture, emailVerified,
    last_name, gender, mobile, nic, address
  };
}
