import { CloseButton } from '../../CloseButton'
import successImage from '../../../assets/success.svg'

export const successTypes = {
  SUCCESS: {
    title: 'Problema',
    image: {
      source: successImage,
      alt: 'Icone de check.',
    },
  },
}

interface FeedbackSuccessStepProps {
  onFeedbackRestartedRequested: () => void
}

export function FeedbackSuccessStep({
  onFeedbackRestartedRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img
          src={successTypes.SUCCESS.image.source}
          alt={successTypes.SUCCESS.image.alt}
        />
        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          type="button"
          onClick={onFeedbackRestartedRequested}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
