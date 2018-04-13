const express = require('express');
const bodyParser = require('body-parser');
const shell = require('shelljs');

const config = require('./utils/const');
const LOCAL_PATH = config.LOCAL_PATH;
const _PORT_ = config._PORT_;

const app = express();

app.use(bodyParser.json({limit: '1024kb'}));

app.get('/', (req, res) => {
  res.send(`fg2s is running on ${_PORT_}!`);
});

app.post('/', (req, res) => {
  const body = req.body || {}; 

  // 非push, 不同步
  if (body.object_kind !== 'push') {
    res.send('It is not a push event.');
    return false;
  } else {
  	const projectName = body.project.name; // 项目名称
  	const branchName = body.ref.replace('refs/heads/', ''); // 分支名称
  	const gitUrl = body.project.git_ssh_url; // repos 的 git 地址
  	const projectPath = body.project.path_with_namespace; // 带名字空间的项目地址
  	const projectGroup = projectPath.replace(`/${projectName}`, '').toLowerCase(); // 组名
  	


  }
});

app.listen(_PORT_, () => {
  console.log(`fg2s listening on port ${_PORT_}!`);
});
