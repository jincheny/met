/**
 * 发送数据样式统一
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
 module.exports = (req, res, next) => {
  res.setUnifyResFormat = (data, code, msg) => {
    let res = {};
    if (code === 200) {
      res = {
        code: code,
        msg: msg || '成功',
        data,
      };
    } else {
      res = {
        code: code,
        msg: msg || '失败',
      };
    }
    return res;
  };
  next();
};
