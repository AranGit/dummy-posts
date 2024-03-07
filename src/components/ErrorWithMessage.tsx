
function ErrorWithMessage({ message }: { message: string }) {
  return (
    <>`An error has occurred: ${message}`</>
  )
}

export default ErrorWithMessage
