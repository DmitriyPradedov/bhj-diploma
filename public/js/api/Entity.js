/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {

  static URL = '';
  
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list(data, callback = f => f) {
    return createRequest({
      url: this.URL,
      data, 
      responseType: 'json',
      method: 'GET',
      callback
    });    
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback = f => f) {
    const modifiedData = Object.assign({ _method: 'PUT' }, data);
    return createRequest({
      url: this.URL,
      data: modifiedData, 
      responseType: 'json', 
      method: 'POST',
      callback
    });        
  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get(id = '', data, callback = f => f) {
    return createRequest({
      url: this.URL + '/' + id,
      data, 
      responseType: 'json',
      method: 'GET',
      callback
    });    
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(id = '', data, callback = f => f) {
    const modifiedData = Object.assign({ id, _method: 'DELETE' }, data);
    return createRequest({
      url: this.URL,
      data: modifiedData, 
      responseType: 'json', 
      method: 'POST',
      callback
    });        
  }
}
