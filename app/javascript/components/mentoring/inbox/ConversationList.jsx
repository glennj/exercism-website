import React from 'react'
import { Pagination } from '../Pagination'
import { Conversation } from './Conversation'
import { usePaginatedRequestQuery } from '../../../hooks/request-query'
import { Loading } from '../../common/Loading'

export function ConversationList({ request, setPage }) {
  const {
    isLoading,
    isError,
    isSuccess,
    resolvedData,
    latestData,
    refetch,
  } = usePaginatedRequestQuery('mentor-conversations-list', request)

  return (
    <div>
      {isLoading && <Loading />}
      {isError && (
        <>
          <p>Something went wrong</p>
          <button onClick={() => refetch()} aria-label="Retry">
            Retry
          </button>
        </>
      )}
      {isSuccess && (
        <div className="--conversations">
          {resolvedData.results.map((conversation, key) => (
            <Conversation key={key} {...conversation} />
          ))}
          {latestData && (
            <footer>
              <Pagination
                current={request.query.page}
                total={latestData.meta.total}
                setPage={setPage}
              />
            </footer>
          )}
        </div>
      )}
    </div>
  )
}
