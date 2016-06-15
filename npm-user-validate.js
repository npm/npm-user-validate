exports.email = email
exports.pw = pw
exports.username = username
exports.firstLastName = firstLastName

var requirements = exports.requirements = {
  username: {
    lowerCase: 'Name must be lowercase',
    urlSafe: 'Name may not contain non-url-safe chars',
    dot: 'Name may not start with "."'
  },
  password: {},
  email: {
    valid: 'Email must be an email address'
  },
  firstLastName: {
    valid: 'Valid first and last names must not include < or >'
  }
};

function username (un) {
  if (un !== un.toLowerCase()) {
    return new Error(requirements.username.lowerCase)
  }

  if (un !== encodeURIComponent(un)) {
    return new Error(requirements.username.urlSafe)
  }

  if (un.charAt(0) === '.') {
    return new Error(requirements.username.dot)
  }

  return null
}

function email (em) {
  if (!em.match(/^.+@.+\..+$/)) {
    return new Error(requirements.email.valid)
  }

  return null
}

function pw (pw) {
  return null
}

function firstLastName (name) {
  if (typeof name !== "string" || name === "") {
    return new Error(requirements.firstLastName.valid)
  }

  if (name.indexOf("<") > -1) {
    return new Error(requirements.firstLastName.valid)
  }

  if (name.indexOf(">") > -1) {
    return new Error(requirements.firstLastName.valid)
  }

  return null;
}
