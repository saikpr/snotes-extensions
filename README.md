# snotes-extensions

[![Netlify Status](https://api.netlify.com/api/v1/badges/85b49078-b774-490e-901c-623ffc31bd81/deploy-status)](https://app.netlify.com/sites/snotes-extensions/deploys)

Static export from https://github.com/iganeshk/standardnotes-extensions using

```
docker build -t snotes-extensions .

and  then


docker run   -v /home/sainyam/snotes-extensions/.env:/build/.env   -v /home/sainyam/snotes-extensions/extensions:/build/extensions   -v /home/sainyam/snotes-extensions/public:/build/public   -v /home/sainyam/snotes-extensions/standardnotes-extensions-list.txt:/build/standardnotes-extensions-list.txt snotes-extensions
```