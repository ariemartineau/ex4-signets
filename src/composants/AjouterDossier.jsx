import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#673ab7');

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#673ab7');
  }

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
          />
          <TextField
            margin="normal"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          <TwitterPicker 
            width="100%" 
            triangle="hide" 
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            colors={['#e91e63', '#9c27b0', '#2196f3', '#00bcd4', '#009688', '#ff9800']}
          />
        </DialogContent>
        <DialogActions style={{ padding: "20px 24px"}} >
          <Button 
            onClick={()=>{setOuvert(false); viderChamps()}} 
            color="white"
            style={{
              color: "#ffffff",
              backgroundColor: "#a30000",
              padding: "6px 15px"
            }}>
            Annuler
          </Button>
          <Button 
            onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} 
            color="white"
            style={{
              color: "#ffffff",
              backgroundColor: "#009624",
              padding: "6px 15px"
            }}>
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}