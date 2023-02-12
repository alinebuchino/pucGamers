import React, { useState } from "react";
import { Feather } from '@expo/vector-icons'
import { RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./styles";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { theme } from "../../global/styles/theme";
import { GuildProps } from '../../components/Guild';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from "../../components/Button";

export function AppointmentCreate() {

    const [category, setCategory] = useState('');
    const [openGuildsModa, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView>
                <Header
                    title="Agendar Partida"
                />
                <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                    Categoria
                </Text>

                <CategorySelect
                    hasCheckBox
                    setCategory={setCategory}
                    categorySelected={category}
                />

                <View style={styles.form}>
                    <RectButton onPress={handleOpenGuilds}>
                        <View style={styles.select}>
                            <GuildIcon />

                            <View style={styles.selectBody}>
                                <Text style={styles.label}>
                                    {
                                        guild.name
                                            ? guild.name
                                            : 'Selecione um servidor'
                                    }
                                </Text>
                            </View>

                            <Feather
                                name="chevron-right"
                                color={theme.colors.heading}
                                size={18}
                            />
                        </View>
                    </RectButton>

                    <View style={styles.field}>
                        <View>
                            <Text style={[styles.label, { marginBottom: 8 }]}>
                                Dia e mês
                            </Text>
                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>
                                    /
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                        <View>
                            <Text style={[styles.label, { marginBottom: 8 }]}>
                                Hora e minuto
                            </Text>
                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>
                                    :
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                    </View>

                    <View style={[styles.field, { marginBottom: 8 }]}>
                        <Text style={styles.label}>
                            Descrição
                        </Text>

                        <Text style={styles.caracteresLimit}>
                            Max 100 caracteres
                        </Text>
                    </View>

                    <TextArea
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />
                </View>

                <View style={styles.footer}>
                    <Button title="Agendar" />
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}