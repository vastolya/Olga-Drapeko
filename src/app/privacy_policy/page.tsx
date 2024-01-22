import React from "react";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";

const privacy_policy = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] md:h-[10.74vh] h-[128px]"></div>
      <div
        className={`md:my-[5.55vh] md:mx-[12.5vw] flex flex-col md:gap-y-[4.44vh] ${montserrat.className} md:text-[1.48vh] leading-[2.22vh] font-medium text-[#1B1743]`}
      >
        <div>
          <h1
            className={`md:pb-[1.48vh] md:text-[3.33vh] md:leading-[3.51vh] font-bold ${evolventa.className}`}
          >
            Настоящая политика обработки персональных данных
          </h1>
          <p className="md:pb-[2.22vh]">
            Составлена в соответствии с требованиями Федерального закона от
            27.07.2006 № 152-ФЗ «О персональных данных» и описывает, как мы
            обрабатываем и обеспечиваем безопасность персональных данных
          </p>
          <p>
            Оператором персональных данных является Драпеко Ольга Андреевна.{" "}
            <br />
            Понятия, определенные в статье 3 Федерального закона от 27.07.2006 №
            152-ФЗ «О персональных данных», используются в Политике с
            аналогичным значением
          </p>
        </div>
        <div>
          <p className="md:pb-[1.11vh] md:text-[1.66vh] font-bold">
            Сбор и использование информации
          </p>
          <p>
            Мы собираем личные данные (ваше имя, номер телефона, адрес
            электронной почты), только при вашем согласии и в целях
            предоставления доступа к сервисам и информации, содержащейся на
            сайте, а также для коммуникации. Мы используем эту информацию
            исключительно для обработки вашего запроса на обратный звонок и
            коммуникации с вами.
            <br /> Мы обрабатываем персональные данные только в случае их
            отправки вами через специальные формы, расположенные на сайте.
            Заполняя и отправляя их, вы выражаете свое согласие на обработку
            персональных данных в соответствии с Политикой
          </p>
        </div>
        <div>
          <p className="md:pb-[1.11vh] md:text-[1.66vh] font-bold">
            Порядок обработки персональных данных
          </p>
          <p>
            Безопасность персональных данных, которые мы обрабатываем,
            обеспечивается путем реализации комплекса мер, необходимых для
            выполнения требований действующего законодательства о персональных
            данных. Мы обеспечиваем сохранность персональных данных и принимаем
            все возможные меры, исключающие несанкционированный доступ к ним со
            стороны третьих лиц. Ваши персональные данные никогда не будут
            переданы третьим лицам, за исключением случаев, предусмотренных
            действующим законодательством. В случае выявления неточностей в
            персональных данных вы можете их актуализировать путем направления
            уведомления на адрес электронной почты, указанный на сайте. Вы также
            вправе запросить информацию о персональных данных, которые мы
            обрабатываем. Срок обработки персональных данных является
            неограниченным, но вы можете в любой момент отозвать свое согласие
            на обработку персональных данных, направив соответствующее
            уведомление на электронную почту, указанную на сайте, в этом случае
            персональные данные подлежат уничтожению
          </p>
        </div>
        <div>
          <p className="md:pb-[1.11vh] md:text-[1.66vh] font-bold">
            Куки и аналитика
          </p>
          <p>
            Наш сайт может использовать технологии, такие как куки (Cookie), для
            сбора и обработки обезличенной информации о посетителях без
            предоставления соответствующей информации самими пользователями с
            целью улучшения качества сайта и его содержания. Вы можете отключить
            использование куки в настройках вашего браузера
          </p>
        </div>
        <div>
          <p className="md:pb-[1.11vh] md:text-[1.66vh] font-bold">
            Изменения в Политике
          </p>
          <p>
            Мы оставляем за собой право вносить изменения в Политику. Любые
            изменения будут опубликованы на этой странице, и дата последнего
            обновления будет обновлена
          </p>
        </div>
        <div>
          <p className="md:pb-[1.11vh] md:text-[1.66vh] font-bold">
            Контактная информация
          </p>
          <p className="md:pb-[1.11vh]">
            Если у вас есть вопросы или замечания относительно Политики, <br />
            свяжитесь с нами по следующей контактной информации:
          </p>
          <p>
            Электронная почта: oa.drapeko@gmail.com <br />
            Телефон: +7-923-341-32-66
          </p>
        </div>
        <div>
          <p className="md:pb-[1.11vh] md:text-[1.66vh] font-bold">
            Заключительные положения:
          </p>
          <p>
            Принимая условия Политики, вы подтверждаете, что вам известны ваши
            права и обязанности, предусмотренные действующим законодательством
            Российской Федерации о персональных данных, в частности, право на
            доступ к своим персональным данным и на отзыв своего согласия. Если
            вы не намерены предоставлять персональные данные или не принимаете
            условия Политики, то вы должны прекратить использование сайта, в
            этом случае мы не сможем обеспечить вам использование сайта
          </p>
        </div>
        <p className="text-[#807D9B]">Дата изменений: 22.01.2024</p>
      </div>
    </div>
  );
};

export default privacy_policy;
