import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

const ConfirmDialogue = (props) => {
    const { children: message, open, setOpen, onConfirm } = props

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-dialog"
        >
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() => setOpen(false)}
                    color="secondary"
                >
                    No
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        setOpen(false)
                        onConfirm()
                    }}
                    color="default"
                >
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialogue