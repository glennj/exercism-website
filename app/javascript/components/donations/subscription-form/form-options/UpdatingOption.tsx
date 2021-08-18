import React, { useCallback, useState } from 'react'
import { useMutation } from 'react-query'
import { sendRequest } from '../../../../utils/send-request'
import { typecheck } from '../../../../utils/typecheck'
import { redirectTo } from '../../../../utils/redirect-to'
import { FormButton } from '../../../common'
import { ErrorBoundary, ErrorMessage } from '../../../ErrorBoundary'
import currency from 'currency.js'

type Links = {
  update: string
}

type APIResponse = {
  links: {
    index: string
  }
}

const DEFAULT_ERROR = new Error('Unable to update subscription')

export const UpdatingOption = ({
  amount: currentAmount,
  links,
  onClose,
}: {
  amount: currency
  links: Links
  onClose: () => void
}): JSX.Element => {
  const [amount, setAmount] = useState<currency | ''>(currentAmount)

  const [mutation, { status, error }] = useMutation<APIResponse>(
    () => {
      if (amount === '') {
        throw 'cant change to empty amount'
      }

      const { fetch } = sendRequest({
        endpoint: links.update,
        method: 'PATCH',
        body: JSON.stringify({ amount_in_cents: amount.intValue }),
      })

      return fetch.then((json) => typecheck<APIResponse>(json, 'subscription'))
    },
    {
      onSuccess: (response) => {
        redirectTo(response.links.index)
      },
    }
  )

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      mutation()
    },
    [mutation]
  )

  const handleChange = useCallback((e) => {
    const parsedValue = parseInt(e.target.value)

    if (isNaN(parsedValue)) {
      setAmount('')
      return
    }

    if (Math.sign(parsedValue) !== 1) {
      setAmount('')
      return
    }

    setAmount(currency(e.target.value))
  }, [])

  return (
    <div className="expanded-option">
      <form data-turbo="false" onSubmit={handleSubmit}>
        <label htmlFor="donation_amount" className="text-label">
          Change donation amount
        </label>
        <label className="c-faux-input">
          <div className="icon">$</div>
          <input
            type="number"
            min="0"
            step="0.01"
            id="donation_amount"
            value={amount === '' ? amount : amount.value}
            onChange={handleChange}
          />
        </label>
        {amount !== '' ? (
          <React.Fragment>
            <p className="footnote">
              You&apos;ll start being charged{' '}
              <strong>{amount.format()} per month</strong>, on your next billing
              date.
              {amount.value > currentAmount.value
                ? ' Thank you for increasing your donation!'
                : null}
            </p>
          </React.Fragment>
        ) : null}
        <div className="flex">
          <FormButton
            status={status}
            disabled={amount === ''}
            className="btn-xs btn-primary mr-12"
          >
            Change amount
          </FormButton>
          <FormButton
            type="button"
            onClick={onClose}
            status={status}
            className="btn-xs btn-enhanced"
          >
            Cancel this change
          </FormButton>
        </div>
      </form>
      <ErrorBoundary resetKeys={[status]}>
        <ErrorMessage error={error} defaultError={DEFAULT_ERROR} />
      </ErrorBoundary>
    </div>
  )
}