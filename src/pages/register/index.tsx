import {
  Button,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/authContext';
import {
  FaBirthdayCake,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaLocationArrow,
  FaLock,
  FaPhone,
  FaStreetView,
  FaUser,
} from 'react-icons/fa';
import { Link as RRDLink } from 'react-router-dom';
import Input from '../../components/input';
import { registerSchema} from '../../utils/schemas'

interface registerData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description?: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  houseNumber: number;
  houseComplement?: string;
  role: string;
  password: string;
}

function Register(): JSX.Element {
  const { token, register: registerUser, getInfos, logoff } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<registerData>({
    resolver: yupResolver(registerSchema),
  });

  const handleregister: SubmitHandler<registerData> = (
    data: registerData,
  ) => {
    setLoading(true);
    registerUser(data)
      .then((_) => {
        setLoading(false);
        getInfos(token);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <Flex
      width={'100vw'}
      alignItems={'center'}
      alignSelf={'flex-start'}
      display={'flex'}
      flexDirection={'row'}
    >
      {/* Form here */}
      <Flex
        as={'form'}
        onSubmit={handleSubmit(handleregister)}
        mt={'4'}
        w={'50%'}
        maxW={'480px'}
        padding={'30px 45px'}

        flexDirection={'column'}

        border={'3px solid'}
        borderColor={'gray.100'}
        borderRadius={'10'}

        bg={'white'}
        color={'gray.900'}
        boxShadow={'0px 3px 10px rgba(0,0,0,.8)'}

        marginRight={'5vw'}
      >
        <VStack spacing={'5'}>
          <Heading>Cadastro</Heading>
          <Text
            alignSelf={'flex-start'}
            fontSize={'20px'}
          >Informações pessoais</Text>
          <Input
            placeholder="Ex: Samuel Leão"
            icon={FaUser}
            label={'Nome'}
            error={errors.name}
            {...register('name')}
          />
          <Input
            placeholder="Ex: samuel@kenzie.com.br"
            icon={FaEnvelope}
            label={'E-mail'}
            type={'email'}
            error={errors.email}
            {...register('email')}
          />
          <Input
            placeholder="000.000.000-00"
            icon={FaUser}
            label={'CPF'}
            type={'text'}
            error={errors.cpf}
            {...register('cpf')}
          />
          <Input
            placeholder="(DDD) 90000-0000"
            icon={FaPhone}
            label={'Celular'}
            error={errors.phone}
            {...register('phone')}
          />
          <Input
            placeholder="dd/MM/AAAA"
            icon={FaBirthdayCake}
            label={'Data de nascimento'}
            error={errors.birthdate}
            {...register('birthdate')}
          />
          <Input
            placeholder="Digitar descrição"
            icon={FaEnvelopeOpenText}
            label={'Descrição'}
            error={errors.description}
            {...register('description')}
          />
          <Input
            placeholder="00000.000"
            icon={FaLocationArrow}
            label={'CEP'}
            error={errors.cep}
            {...register('cep')}
          />
          <Input
            placeholder="Digitar Estado"
            icon={FaStreetView}
            label={'Estado'}
            error={errors.state}
            {...register('state')}
          />
          <Input
            placeholder="Digitar Cidade"
            icon={FaStreetView}
            label={'Cidade'}
            error={errors.city}
            {...register('city')}
          />
          <Input
            placeholder="Digitar Rua"
            icon={FaStreetView}
            label={'Rua'}
            error={errors.street}
            {...register('street')}
          />
          <Input
            placeholder="Ex: 123"
            icon={FaStreetView}
            label={'Rua'}
            error={errors.houseNumber}
            {...register('houseNumber')}
          />
          <Input
            placeholder="Ex: apart 307"
            icon={FaStreetView}
            label={'Complemento'}
            error={errors.houseComplement}
            {...register('houseComplement')}
          />

          {/* 
          ESPAÇO PARA COMO RESOLVER ESSA PORRA DE "TIPO DE CONTA"
          */}

          <Input
            placeholder="Digite sua senha"
            icon={FaLock}
            label={'Senha'}
            type={'password'}
            error={errors.password}
            {...register('password')}
          />
          <Button
            isLoading={loading}
            type={'submit'}
            bg={'blue.600'}
            color={'white'}
            _hover={{ bgColor: 'blue.900' }}
            borderRadius={'2'}
            height={'14'}
            width={'100%'}
            fontSize={'1.2rem'}
          >
            Cadastrar
          </Button>
        </VStack>
        <VStack mt={'4'} spacing={'5'}>
          <Text>
            Já possui uma conta?{' '}
            <Link as={RRDLink} to="/login">
              Faça login
            </Link>
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Register;