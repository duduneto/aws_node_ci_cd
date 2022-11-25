import express,
{
    Router,
    Request,
    Response,
} from 'express';

const app = express();
const routes = Router();

routes.get('/', (_request: Request, response: Response) => {
    return response.send('Server Running');
});

app.use(routes);

app.listen(3333, () => {
    console.log('Server Running')
})

