import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Vish, Deu Pau!! 😥</h1>
      <p className="text-accent-foreground">
        Envie uma mensagem informando o erro para o suporte.
      </p>

      <pre className="flex">
        Detalhe do erro:{' '}
        <p className="font-semibold text-rose-400">
          {error?.message || JSON.stringify(error, null, 2)}
        </p>
      </pre>

      <p className="mt-6 flex flex-col items-center justify-center text-accent-foreground">
        Enquanto se resolve o problema, nossa equipe aconselha à assistir a
        saga:
      </p>

      <div className="flex flex-col items-center justify-center gap-5">
        <strong className="text-xl"> Senhor dos aneis </strong>
        <img
          className="h-52 w-52 rounded-full object-cover"
          src="https://media.tenor.com/GzJNeW162VgAAAAM/gollum-lord-of-the-rings.gif"
          alt=""
        />
      </div>
      <p className="mt-9 text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>

      <p className="mt-12 animate-pulse text-xs text-accent-foreground">
        Caso o error persista, aconselho assistir também a saga de Star Wars.
      </p>
    </div>
  )
}
