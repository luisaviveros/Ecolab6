// controllers/screen1Events.controller.js
import { emitEvent } from '../services/socket.service.js';

export const handleChangeScreenEvent = (req, res) => {
  try {
    emitEvent('next-screen');
    res.json({ message: 'Cambio de pantalla exitoso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
