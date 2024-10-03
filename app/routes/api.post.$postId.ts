import { json } from '@remix-run/node';
import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ fesak: params.postId });
}

export async function action({ params, request }: ActionFunctionArgs) {
  switch (request.method) {
    case 'POST': {
      console.log(request);
      return json({ params });
    }
  }
}
